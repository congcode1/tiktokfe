import clsx from "clsx";

import styles from "./Header.module.scss";

export default function Header() {
    return (
        <div className={clsx(styles.DivHeaderContainer)}>
            <div className={clsx(styles.DivHeaderWrapperMain)}>
                <img src="IconTiktok.png"></img>
                <div>
                    <form className={clsx(styles.FormElement)} action="/search">
                        <input type="search" value="" placeholder="Search accounts and videos" name="q" autocomplete="off" data-e2e="search-user-input" className={clsx(styles.InputElement)} />
                        <span className={clsx(styles.SpanSpliter)}></span>
                        <button type="submit" data-e2e="search-button" class="tiktok-3n0ac4-ButtonSearch ev30f216">
                            <svg width="24" height="24" viewBox="0 0 48 48" fill="rgba(22, 24, 35, 0.34)" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"></path>
                            </svg>
                        </button>
                        <div className={clsx(styles.DivInputBorder)}></div></form>
                </div>
                <div>
                    <div className={clsx(styles.DivHeaderRightContainer)}>
                        <div>
                            <a href="/upload" data-e2e="upload-icon" className={clsx(styles.StyledLinkText)}>Upload </a>
                        </div><button type="button" data-e2e="top-login-button" className={clsx(styles.StyledLoginButton)}>Log in
                        </button>
                        <i data-e2e="see-more-icon" className={clsx(styles.IMoreIconWrapper)}>
                            <svg className={clsx(styles.StyledEllipsisVertical)} width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"></path>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
}