export interface AdminGallery {
  add: () => void;
  remove: (entityId: number) => void;
}

export interface AdminGalleryElement {
  edit: () => void;
  remove: () => void;
}
