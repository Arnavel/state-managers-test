import { DeleteItemType, EventItemType, StoreItemsType } from '~/stores/effector/ETodoStore';

export type TItemsProps = {
  list: StoreItemsType;
  toggleItem: DeleteItemType;
  deleteItem: EventItemType;
};
