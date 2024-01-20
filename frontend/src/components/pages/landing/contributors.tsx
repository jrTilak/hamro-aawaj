import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import ReportHandler from "@/handlers/report-handler";
import { UserType } from "@/types/user.types";
import { useEffect, useState } from "react";

const Contributors = () => {
  const [topContributors, setTopContributors] = useState([] as UserType[]);

  useEffect(() => {
    const getContributors = async () => {
      const res = await ReportHandler.getRankUsers();
      if (res.success) {
        setTopContributors(res.data);
      }
    };
    getContributors();
  });

  return (
    <>
      <div className="flex flex-col gap-4 p-4 min-w-96 self-start">
        <h1 className="text-2xl font-semibold text-gray-700">
          Top Contributors
        </h1>
        {topContributors.map((c) => {
          return (
            <div
              key={c._id}
              className="flex items-center gap-4 p-4 border rounded-lg"
            >
              <Avatar>
                <AvatarImage alt="" src={c.profileImg} />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold">{c.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contributors;