import React from "react";
import { CardItem } from "./card-item";
import {
  AnalyticIcon,
  FindIcon,
  MailIcon,
  RewIcon,
  StempsIcon,
  TrainIcon,
} from "@/shared/ui/icons";
import { ICardItemProps } from "./card-item-props";
import { CardSwiper } from "./card-swiper";

// Массив карточек
const MockCardItems: ICardItemProps[] = [
  {
    icon: <AnalyticIcon />,
    title: "Анализ текущего состояния карьеры",
    description:
      "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
  },
  {
    icon: <FindIcon />,
    title: "Поиск работы",
    description:
      "Поможем сформировать профессиональный портфель, который выделит вас среди других кандидатов.",
  },
  {
    icon: <MailIcon />,
    title: "Сопроводительные письма и резюме",
    description:
      "Определим вашу карьерную цель и разработаем стратегию для трудоустройства.",
  },
  {
    icon: <TrainIcon />,
    title: "Тренинг по презентации личного бренда",
    description: "Научим говорить о себе кратко, ярко и профессионально",
  },
  {
    icon: <RewIcon />,
    title: "Подготовка к собеседованию",
    description: "Поможем встретиться соискателю и работодателю.",
  },
  {
    icon: <StempsIcon />,
    title: "Рекомендация по базе STEMPS Career",
    description: "Поможем встретиться соискателю и работодателю.",
  },
];

export const Card = () => {
  return (
    <>
      {/* Мобильная версия с Swiper */}
      <div className="block md:hidden relative px-4">
        <CardSwiper>
          {MockCardItems.map((cardItem, index) => (
            <CardItem
              key={index}
              icon={cardItem.icon}
              title={cardItem.title}
              description={cardItem.description}
            />
          ))}
        </CardSwiper>
      </div>

      {/* Десктоп-версия: обычный ряд карточек */}
      <div className="px-4  hidden md:flex gap-4 overflow-x-scroll pb-1">
        {MockCardItems.map((cardItem, index) => (
          <CardItem
            key={index}
            icon={cardItem.icon}
            title={cardItem.title}
            description={cardItem.description}
          />
        ))}
      </div>
    </>
  );
};
