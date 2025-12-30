import AppBarChart from "@/components/AppBarChart";
import AppAreaChart from "@/components/AppAreaChart";
import styles from "./Homepage.module.css";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import AppTodoList from "@/components/AppTodoList";

export default function Homepage() {
  return (
    <div className={`${styles.grid}`}>
      <div className={`${styles.box1} bg-primary-foreground p-4 rounded-lg`}>
        <AppBarChart />
      </div>
      <div className={`${styles.box2} bg-primary-foreground p-4 rounded-lg`}>
        <CardList title={"Latest Transactions"} />
      </div>
      <div className={`${styles.box3} bg-primary-foreground p-4 rounded-lg`}>
        <AppPieChart />
      </div>

      {/* Fix this V */}
      <div className={`${styles.box4} bg-primary-foreground p-4 rounded-lg`}>
        <AppTodoList />
      </div>
      <div className={`${styles.box5} bg-primary-foreground p-4 rounded-lg`}>
        <AppAreaChart />
      </div>
      <div className={`${styles.box6} bg-primary-foreground p-4 rounded-lg`}>
        <CardList title={"Popular Content"} />
      </div>
    </div>
  );
}
