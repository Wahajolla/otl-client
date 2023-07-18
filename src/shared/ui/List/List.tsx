import React from 'react';

type ListItemProps = {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

function ListItem({ icon, title, description, action }: ListItemProps) {
  return (
    <div className="flex flex-row">
      {icon}
      <div className="flex flex-col">
        <a>{title}</a>
        <p>{description}</p>
      </div>
      {action}
    </div>
  );
}

type Props = {
  data: ListItemProps[];
};

function List({ data }: Props) {
  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
        <ListItem
          title={item.title}
          action={item.action}
          icon={item.icon}
          description={item.description}
          key={index}
        ></ListItem>
      ))}
    </div>
  );
}

List.ListItem = ListItem;

export default List;
