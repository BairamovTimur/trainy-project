import { Link } from "react-router"
import styles from "./styles.module.css"

interface NavigationLinkProps {
    title: string
    to: string
    icon: React.ReactNode
}

export const NavigationLink = ({title, to, icon}: NavigationLinkProps) => {
    return(
        <Link to={to} className={styles.navigationLink}>
            <div className={styles.content}>
                <h1>
                    {title}
                </h1>
                <div className={styles.icon}>
                    {icon} {to}
                </div>
            </div>
        </Link> 
    )
}