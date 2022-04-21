
import clsx from "clsx";
import abbrNum from "../../core/helpers/friendlyNumber";
import FollowButton from "../FollowButton/FollowButton";
import NumAndDescription from "../NumAndDescription/NumAndDescription";
import styles from "./SubProfile.module.scss";

export default function SubProfile({ nickname, avatar, unique_id }) {
    return <div className={clsx(styles.videoAuthorName)}>
        <h3 className="link-tag">{nickname}</h3>
        <div className={clsx(styles.breifInfo)}>
            <div className={clsx(styles.breifInfoTop)}>
                <img src={avatar} alt="author avatar" />
                <FollowButton width="90px" height="36px" />
            </div>
            <h3 className="link-tag mb-6">{nickname}</h3>
            <h5 className="mb-6">{unique_id}</h5>
            <NumAndDescription />
            <hr className="mb-8" />
            <p>
                một đoạn text mô tả description, asd z zzzzzzzzzzzz
            </p>
        </div>
    </div>
}