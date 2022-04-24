import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from "./ControlItemSound.module.scss";

export default function ControlItemSound({ style, className, isSound, HandleIsSoundChange, HandleVolumeChange }) {
    return <span style={style} className={clsx(styles.controlItemSound)}>
        <span className={className}>
            <FontAwesomeIcon
                icon={isSound ? faVolumeHigh : faVolumeMute}
                onClick={HandleIsSoundChange}
            />
        </span>
        <span className={clsx(styles.controlItemRange)}>
            <input type="range" orient="vertical"
                onChange={(e) => HandleVolumeChange(e)}
            />
        </span>
    </span>
}