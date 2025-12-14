interface TicketCardProps {
  children: React.ReactNode;
  className?: string;
}

function TicketCard({ children, className = '' }: TicketCardProps) {
  return (
    <div className={`ticket-wrapper ${className}`}>
      <div className="ticket-body">
        {children}
      </div>
    </div>
  )
}

export default TicketCard