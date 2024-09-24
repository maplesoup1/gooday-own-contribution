import React from "react";
import Image from "next/image";

export interface CommentData {
    userName: string;
    userAvatarSrc: string;
    content: string;
    title: string;
}

interface CommentCardProps {
    comment: CommentData;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
    return (
        <div className="bg-gray-200 rounded-lg flex flex-col gap-6 w-[330px] h-[250px] p-4">
            <div className="flex justify-start">
                <Image src="/img/quote.svg" height={20} width={20} alt="quote" />
            </div>
            <div className="font-bold">
                {comment.content}
            </div>
            <div className="flex gap-6">
                <div className="flex justify-center items-center">
                    <Image 
                        src={comment.userAvatarSrc} 
                        height={50} 
                        width={50} 
                        alt="avatar"
                        className="rounded-full"
                    />
                </div>
                <div>
                    <div className="font-bold text-xl">{comment.userName}</div>
                    <div>{comment.title}</div>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;