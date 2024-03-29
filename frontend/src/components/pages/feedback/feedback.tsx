import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
const Feedback = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your feedback!");
    e.currentTarget.reset(); // Reset the form
  };

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
        <div className="mb-4">
          <Label htmlFor="name">Name:</Label>
          <Input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email:</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <Label htmlFor="feedback">Feedback:</Label>
          <Textarea
            id="feedback"
            rows={5}
            placeholder="Enter your feedback"
          ></Textarea>
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </motion.form>
    </>
  );
};
export default Feedback;
