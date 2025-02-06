import { Separator } from "@/shared/ui/separator";

interface ActionTitleConfig {
  version: string;
  text: string;
}

interface SchoolTitleProps {
  title?: string;
  version?: string;
  type?: string;
}

const defaultConfig: ActionTitleConfig = {
  version: "1.0",
  text: "Стандартный заголовок",
};

const getActionTitleConfig = (type?: string): ActionTitleConfig => {
  switch (type) {
    case "Service":
      return { version: "1.0", text: "Наши услуги" };
    default:
      return { version: "1.0", text: "Стандартный заголовок" };
  }
};

const SchoolTitle = ({ title, version, type }: SchoolTitleProps) => {
  const { version: configVersion, text: configText } = type
    ? getActionTitleConfig(type)
    : defaultConfig;

  // Если явно переданы title и version, они будут иметь приоритет
  const finalVersion = version || configVersion;
  const finalText = title || configText;

  return (
    <div className="py-2 sm:py-3 flex flex-col w-full px-4">
      <div className="flex flex-col sm:flex-row justify-between items-baseline xl:gap-[310px]">
        <span className="text-accent-main text-[26px] sm:text-[40px] min-w-[119px]">
          {finalVersion}
        </span>
        <Separator className="mx-auto h-[1px] w-full rounded-md block sm:hidden bg-zinc-300 dark:bg-zinc-700" />
        <h2 className="text-accent-main text-[26px] sm:text-[40px] w-full font-normal">
          {finalText}
        </h2>
      </div>
      <Separator className="h-[1px] rounded-md hidden sm:flex bg-zinc-300 dark:bg-zinc-700" />
    </div>
  );
};

export default SchoolTitle;
