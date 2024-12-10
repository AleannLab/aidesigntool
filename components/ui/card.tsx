
import "./card.modules.css"

export const Card = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className="card" {...props} />
}

export const CardHeader = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className="card--header" {...props} />
}

export const CardTitle = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className="card--title" {...props} />
}

export const CardContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className="card--content" {...props} />
}

export const CardSidebar = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className="card--sidebar" {...props} />
}