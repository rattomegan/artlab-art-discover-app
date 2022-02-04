import { checkToken } from "../../utilities/users-service"

function OrderHistoryPage() {

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate)
  }

  return (
    <div>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>

  );
}

export default OrderHistoryPage;
