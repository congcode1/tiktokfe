
import { faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import NumAndDescription from "../../components/NumAndDescription/NumAndDescription"
import styles from "./UIProfileSection.module.scss"

export default function UIProfileSection() {
    return <div className="grid">
        <div className="row">
            <div className="col c-9">
                <div className={clsx(styles.infor)}>
                    <div className={clsx(styles.inforAvatar)}>
                        <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7dead547e8087b2b0db862258953e545~c5_100x100.jpeg?x-expires=1650628800&x-signature=eA%2FH0LoM5JP1ns%2F7jdsjgHBWhik%3D" />
                    </div>
                    <div className={clsx(styles.mainInfor)}>
                        <h3>Name Name</h3>
                        <h4>Signature zz</h4>
                        <div>
                            <button>Tin nhắn</button>
                        </div>
                    </div>
                    <div className={clsx(styles.shareReport)}>
                        <div>
                            <FontAwesomeIcon icon={faShare} />
                        </div>
                        <div>
                            report
                        </div>
                    </div>
                </div>
            </div>
            <div className="col c-3">

            </div>
        </div>
        <NumAndDescription count={3} className="mt-20" />
        <h4>Like animal abc asdd</h4>
    </div>
}