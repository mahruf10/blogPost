
const ServicePage = async() => {
    // throw new Error("This is service page error");
await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div>
            <h1>This is service page</h1>
        </div>
    );
};

export default ServicePage;