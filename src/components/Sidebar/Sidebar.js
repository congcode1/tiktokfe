import clsx from "clsx";

// import styles from "./Sidebar.module.scss";
import "./Sidebar.css";

import {
  faHouse,
  faUserGroup,
  faVideoCamera,
  faCheckCircle,
  faHashtag,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubProfile from "../SubProfile/SubProfile";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarscroll">
        <div className="sidebarwrapper">
          <div className="sidebarmain">
            <div className="sidebarmainitem selecteditem">
              <span>
                <FontAwesomeIcon icon={faHouse} />
                <h2>Dành cho bạn</h2>
              </span>
            </div>
            <div className="sidebarmainitem">
              <span>
                <FontAwesomeIcon icon={faUserGroup} />
                <h2>Đang follow</h2>
              </span>
            </div>
            <div className="sidebarmainitem">
              <span>
                <FontAwesomeIcon icon={faVideoCamera} />
                <h2>LIVE</h2>
              </span>
            </div>
          </div>
          <div className="sidebaruser">
            <p>Tài khoản được đề xuất</p>
            {Array(5).fill('_').map(() => <div className="sidebaruseritem">
              <a href="google.com.vn">
                <div className="sidebaruseravatar">
                  <span>
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                    />
                  </span>
                </div>
              </a>
              <a href="google.com">
                <div className="sidebarusername">
                  <SubProfile nickname={"Username"}
                    avatar={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                    unique_id={"unique_id"}
                  />
                  <div className="sidebaruserverify">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                </div>
                <p>UserSubName</p>
              </a>
            </div>)}

            <div className="sidebarusershowmore">
              <p>Xem tất cả</p>
            </div>
          </div>
          <div className="sidebaruser">
            <p>Các tài khoản đang follow</p>
            {Array(4).fill("_").map(() => <div className="sidebaruseritem">
              <a href="google.com.vn">
                <div className="sidebaruseravatar">
                  <span>
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                    />
                  </span>
                </div>
              </a>
              <a href="google.com">
                <div className="sidebarusername">
                  <SubProfile nickname={"Username"}
                    avatar={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                    unique_id={"unique_id"}
                  />
                  <div className="sidebaruserverify">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                </div>
                <p>UserSubName</p>
              </a>
            </div>)}
            <div className="sidebarusershowmore">
              <p>Xem thêm</p>
            </div>
          </div>
          <div className="sidebardiscover">
            <a href="google.com">
              <div className="sidebardiscoveritem">
                <FontAwesomeIcon icon={faHashtag} />
                <p>gamernextgen</p>
              </div>
            </a>
            <a href="google.com">
              <div className="sidebardiscoveritem">
                <FontAwesomeIcon icon={faHashtag} />
                <p>gamer</p>
              </div>
            </a>
            <a href="google.com">
              <div className="sidebardiscoveritem">
                <FontAwesomeIcon icon={faHashtag} />
                <p>gamer</p>
              </div>
            </a>
            <a href="google.com">
              <div className="sidebardiscoveritem">
                <FontAwesomeIcon icon={faHashtag} />
                <p>gamer</p>
              </div>
            </a>
            <a href="google.com">
              <div className="sidebardiscoveritem">
                <FontAwesomeIcon icon={faHashtag} />
                <p>gamernextgen</p>
              </div>
            </a>
            <a href="google.com">
              <div className="sidebardiscoveritem">
                <FontAwesomeIcon icon={faHashtag} />
                <p>gamer</p>
              </div>
            </a>
          </div>
          <div className="sidebarfooter">
            <div className="sidebarfooterlink">
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
            </div>
            <div className="sidebarfooterlink">
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
            </div>
            <div className="sidebarfooterlink">
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
              <a href="google.com">Giới thiệu</a>
            </div>
            <span>
              <FontAwesomeIcon icon={faCopyright} />
              2022 - TikTok
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
