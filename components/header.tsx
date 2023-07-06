import React from "react";
import Link from "next/link"
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"

const name = "Yulianlingdeai"
export default function Header({ home }: { home?: boolean }) {
    return (
        <>
            <header className={styles.header}>
                {/* <div className={styles.headerContainer}>
                    <div>left</div>
                    <div>right</div>
                </div> */}
                {home ? (
					<>
						<img
							src='/images/profile.jpg'
							className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href='/'>
							<a>
								<img
									src='/images/profile.jpg'
									className={`${styles.headerImage} ${utilStyles.borderCircle}`}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href='/'>
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
            </header>
        </>
    )
}