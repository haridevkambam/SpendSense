import { FaLocationDot } from "react-icons/fa6";
import { BsCardText } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import toast from "react-hot-toast";
import { DELETE_TRANSACTION } from "../graphql/mutations/transaction.mutation";
import { useMutation, useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries/user.query";

const categoryColorMap = {
    saving: "from-green-700 to-green-400",
    expense: "from-pink-800 to-pink-600",
    investment: "from-blue-700 to-blue-400",
    // Add more categories and corresponding color classes as needed
};

const Card = ({ transaction }) => {

    const { data: authUserData } = useQuery(GET_AUTHENTICATED_USER);

    let { _id, description, paymentType, category, amount, location, date } = transaction;

    const [deleteTransaction, { loading }] = useMutation(DELETE_TRANSACTION, {
        refetchQueries: ["GetTransactions", "GetTransactionStatistics"]
    })

    const cardClass = categoryColorMap[category];

    // Capitalize first letter of each word
    description = description[0]?.toUpperCase() + description.slice(1);
    category = category[0].toUpperCase() + category.slice(1);
    paymentType = paymentType[0].toUpperCase() + paymentType.slice(1);
    const formattedDate = formatDate(date);

    const handleDelete = async () => {
        try {
            await deleteTransaction({ variables: { transactionId: _id } });
            toast.success("Transaction deleted successfully");
        } catch (error) {
            console.log("Error deleting transaction: ", error);
            toast.error(error.message);
        }
    }

    return (
        <div className={`rounded-md p-4 bg-gradient-to-br ${cardClass}`}>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-row items-center justify-between'>
                    <h2 className='text-lg font-bold text-white'>{category}</h2>
                    <div className='flex items-center gap-2'>
                        {!loading && <FaTrash className={"cursor-pointer"} onClick={handleDelete} />}
                        {loading && <div className="w-6 h-6 border-t-2 border-b-2  rounded-full animate-spin"></div>}
                        <Link to={`/transaction/${_id}`}>
                            <HiPencilAlt className='cursor-pointer' size={20} />
                        </Link>
                    </div>
                </div>
                <p className='text-white flex items-center gap-1'>
                    <BsCardText />
                    Description: {description}
                </p>
                <p className='text-white flex items-center gap-1'>
                    <MdOutlinePayments />
                    Payment Type: {paymentType}
                </p>
                <p className='text-white flex items-center gap-1'>
                    <FaSackDollar />
                    Amount: {amount}
                </p>
                <p className='text-white flex items-center gap-1'>
                    <FaLocationDot />
                    Location: {location || "N/A"}
                </p>
                <div className='flex justify-between items-center'>
                    <p className='text-xs text-black font-bold'>{formattedDate}</p>
                    <img
                        src={authUserData?.authUser.profilePicture}
                        className='h-8 w-8 border rounded-full'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};
export default Card;