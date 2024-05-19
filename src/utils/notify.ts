import toast from "react-hot-toast";

export const notify = (Message: string, Icon: string) => toast(Message, { duration: 2000, icon: Icon });