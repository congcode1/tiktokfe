import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import styles from "./ShareList.module.scss"

export default function ShareList({ shareList }) {
    return shareList.map(item =>
        <li key={item.title}
            className={clsx(styles.shareItem)}
        >
            <span className={clsx(styles.shareItemIcon)} style={{ backgroundColor: item.bgColor }}>
                <FontAwesomeIcon icon={item.icon} />
            </span>
            <span className={clsx(styles.shareItemText)}>
                {item.title}
            </span>
        </li>)
}