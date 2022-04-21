
import clsx from "clsx"
import abbrNum from "../../core/helpers/friendlyNumber"
import styles from "./NumAndDescription.module.scss"

export default function NumAndDescription({ count = 2, className = '' }) {
    return <span className={clsx(styles.numAndDescription, "d-block", "mb-10", className)}>
        {count === 3 && <><span className="b-text">{abbrNum(492000, 1)}</span><span>Đang follow</span></>}
        <span className="b-text">{abbrNum(492000, 1)}</span><span>Follow</span>
        <span className="b-text">{abbrNum(23423434, 1)}</span><span>Thích</span>
    </span>
}