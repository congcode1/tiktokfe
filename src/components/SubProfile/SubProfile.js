
import clsx from "clsx";
import abbrNum from "../../core/helpers/friendlyNumber";
import FollowButton from "../FollowButton/FollowButton";
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
            <span className="d-block mb-10">
                <span className="b-text">{abbrNum(492000, 1)}</span><span>Follow</span>
                <span className="b-text">{abbrNum(23423434, 1)}</span><span>Thích</span>
            </span>
            <hr className="mb-8" />
            <p>
                một đoạn text mô tả description, asd z zzzzzzzzzzzz
            </p>
        </div>
    </div>
}