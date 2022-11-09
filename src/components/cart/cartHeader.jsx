import styles from "./cart.module.css";

export const CartHeader = ({ isAllChecked, handleCheckAll }) => {
  return (
    <>
      <header className={styles.header}>
        <div style={{ textAlign: "center" }}>
          <h1 className="Title" style={{ margin: "0px" }}>
            Order And Payment
          </h1>
          <br />
          <br />
        </div>
      </header>
      <div className={styles.cart_title_wrap}>
        <div className={styles.tab_title}>
          <input
            type="checkbox"
            checked={isAllChecked}
            onChange={(e) => handleCheckAll(e.target.checked)}
          />
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>

          <p>전체선택</p>
        </div>
      </div>
    </>
  );
};
