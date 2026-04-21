
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const GroupPhoto = () => {
  return (
    <div className="max-w-6xl mx-auto mb-12 px-4">
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group cursor-pointer">
        <img src='./assets/everyone.jpg'></img>
      </div>
    </div>
  );
};

export default GroupPhoto;
