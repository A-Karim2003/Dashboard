import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Link } from "react-router";

import styles from "./users.module.css";
import CardList from "@/components/CardList";
import UserBadges from "@/components/UserBadges";
import UserInfo from "@/components/UserInfo";
import Profile from "../profile/Profile";
import UserActivity from "@/components/UserActivity";

export default function User() {
  return (
    <div className={`w-full h-full flex flex-col`}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/">Dashboard</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link to="/users">Users</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className={`${styles.grid}`}>
        <div className={`${styles.box1} flex flex-col justify-center gap-4`}>
          <UserBadges />
        </div>
        <div className={styles.box2}>
          <Profile />
        </div>
        <div className={styles.box3}>
          <UserInfo />
        </div>
        <div className={styles.box4}>
          <CardList title={"Latest Transactions"} />
        </div>
        <div className={styles.box5}>
          <UserActivity />
        </div>
      </div>
    </div>
  );
}
