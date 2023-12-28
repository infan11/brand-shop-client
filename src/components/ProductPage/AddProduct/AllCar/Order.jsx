import CarOrder from "./CarOrder";


const Order = ({items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    items.map(item => <CarOrder key={item._id} item={item}></CarOrder>)
                }
            </div>
        </div>
    );
};

export default Order;