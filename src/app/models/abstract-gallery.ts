export abstract class AbstractGallery {
  public pageSize = 10;
  public totalElements: number;
  public isLoading: boolean;

  abstract onPageChange(): void;
}
