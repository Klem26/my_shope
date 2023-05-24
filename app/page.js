"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";

const ProductCard = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeClass = isDarkTheme ? styles["productCard--dark"] : "";
  const themeClassColor = isDarkTheme ? styles["productCard__title__dark"] : "";
  const themeClassColorBg = isDarkTheme
    ? styles["productCard__title__dark_bg"]
    : "";
  const themeClassColorName = isDarkTheme
    ? styles["productCard--dark_name"]
    : "";

  return (
    <>
      <div className={`${styles["productCard"]} ${themeClass}`}>
        <div className={styles.wrapper}>
          <div className={styles.ratingBox}>
            <Image
              src="/scoreBar.svg"
              alt="score Bar"
              width={30}
              height={30}
              priority
            />
            <span className={`${styles["scoreBar_rating"]} ${themeClass} `}>
              3.7
            </span>
          </div>
          <div className={styles.productCard__options}>
            <Image
              src="/Favorite.svg"
              alt="Favorite"
              width={24}
              height={24}
              priority
            />
            <Image
              src="/Base.svg"
              alt="options"
              width={16}
              height={16}
              priority
              className={styles.optionsImg}
            />
          </div>
        </div>
        <Image
          src="/Alcohol.png"
          alt="Alcohol"
          width={164}
          height={100}
          priority
          className={styles.productCard__image}
        />
        <div className={styles.slick}>
          <Image
            src={isDarkTheme ? "/wrapper.svg" : "/wrapperDark.svg"}
            alt="wrapper"
            width={36}
            height={12}
            priority
          />
        </div>
        <p className={`${styles.productCard__title} ${themeClassColor}`}>
          Writers’ Tears
        </p>
        <h3 className={`${styles["productCard__name"]} ${themeClassColorName}`}>
          Whiskey Writers’Tears Red Head, Writers’ Tears
        </h3>
        <p className={`${styles.productCard__subTitle}  ${themeClassColor}`}>
          Speyside Single Malt Scotch Whisky Distillery Bottling
        </p>

        <div className={`${styles.productCard__box} ${themeClassColorBg}`}>
          <p className={styles.productCard__volume}>500 ml</p>
          <div className={styles.productCard__box_country}>
            <Image
              src="/flag-round.svg"
              alt="wrapper"
              width={10}
              height={10}
              priority
            />
            <p className={styles.productCard__country}>Ireland</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleThemeToggle}
        className={styles.productCard__theme_toggle}
      >
        Toggle Theme
      </button>
    </>
  );
};

export default ProductCard;
