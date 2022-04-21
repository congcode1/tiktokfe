import clsx from "clsx";

import Layout from "../../components/Layout/Layout";
import VideoSession from "../../modules/VideoSession";

import styles from "./HomeComponent.module.scss";

function HomeComponent({ loading, list, loader, newRef }) {

    return <Layout>
        <div className={clsx(styles.content)}>
            {list.map(item => <VideoSession loading={loading} ref={newRef()} key={item.id} video={item} />)}
            <div ref={loader}>loader</div>
        </div>
    </Layout>
}

export default HomeComponent