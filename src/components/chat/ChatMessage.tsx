type ChatMessageProps = {
  message: string;
  accentColor: string;
  name: string;
  isSelf: boolean;
  hideName?: boolean;
};

export const ChatMessage = ({
  name,
  message,
  accentColor,
  isSelf,
  hideName,
}: ChatMessageProps) => {
  return (
    <div className={`flex flex-col ${isSelf ? 'items-end' : 'items-start'} ${hideName ? "pt-1" : "pt-4"} px-4`}>
      {!hideName && (
        <div
          className={`text-${isSelf ? "gray-500" : "gray-400"} text-xs mb-1 px-2`}
        >
          {name}
        </div>
      )}
      <div
        className={`px-4 py-3 rounded-md max-w-[80%] text-sm whitespace-pre-line ${
          isSelf 
            ? "bg-gray-700 text-white"
            : `bg-${accentColor}-500 text-white`
        }`}
      >
        {message}
      </div>
    </div>
  );
};