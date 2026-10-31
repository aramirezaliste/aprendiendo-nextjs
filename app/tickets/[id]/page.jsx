async function getTicket(id) {
    const res = await fetch("http://localhost:3001/tickets/" + id, {
        next: {
            revalidate: 60 // con valor 0, La data no se guarda, se actualiza inmediatamente
        }
    })

    return res.json()
}

const TicketDetails = async ({ params }) => {
    const { id } = await params;
    const ticket = await getTicket(id)

    return (
        <main>
            <nav>
                <h2>Ticket details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created By {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    );
}

export default TicketDetails;