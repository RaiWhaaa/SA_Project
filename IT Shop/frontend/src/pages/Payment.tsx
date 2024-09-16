import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import OrderShow from "../components/OrderShow/OrderShow";
import AddressShow from "../components/AddressShow/AddressShow";
import AmountPrice from "../components/AmountPrice/AmountPrice";
import OrderTableList from "../components/OrderTableList/OrderTableList";
import "../stylesheet/page.css";
import "../stylesheet/table.css";
import { GetOrderByID } from "../services/http"; // เพิ่มการนำเข้า API

function Payment() {
    // const [icon, setIcon] = useState("/images/icon/back.png");
    const [orderId, setOrderId] = useState<number | null>(null); // สร้าง state สำหรับ orderId
    const customerID = localStorage.getItem('id');
    
    const parsedCustomerID = customerID ? Number(customerID) : null; // แปลง customerID เป็น number หรือกำหนดค่า default เป็น 0 ถ้าเป็น null
    console.log(parsedCustomerID);

    useEffect(() => {
        // ตัวอย่างการดึง orderId จาก API
        async function fetchOrder() {
            let orderRes = await GetOrderByID(3); // 1 คือตัวอย่าง orderId คุณสามารถเปลี่ยนตามจริง
            if (orderRes) {
                setOrderId(orderRes.id); // สมมติว่า API คืนค่า orderRes.id
            }
        }
        fetchOrder();
    }, []);

    return (
        <>
            <div /*className="mylayout"*/>
                <Header page={"Payment"} />
                <OrderShow orderId={2} />
                <AddressShow orderId={2} />
                {parsedCustomerID !== null && (
                    <AmountPrice customerId={parsedCustomerID} orderId={2} />
                )}
                <div /*className="mytable"*/>
                    <OrderTableList orderId={2} />
                </div>
            </div>
        </>
    );
}

export default Payment;
