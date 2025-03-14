import { Either, left, right } from "@/core/either";
import { InvalidAttachmentTypeError } from "./errors/invalid-attachment-type-error";
import { Attachment } from "../../enterprise/entities/attachment";
import { AttachmentsRepository } from "../repository/attachments-repository";
import { Uploader } from "../storage/uploader";

interface UploadAndCreateAttachmentUseCaseRequest {
  fileName: string;
  fileType: string;
  body: Buffer;
}

type UploadAndCreateAttachmentUseCaseResponse = Either<
  InvalidAttachmentTypeError,
  { attachment: Attachment }
>;

export class UploadAndCreateAttachmentUseCase {
  constructor(
    private attachmentsRepository: AttachmentsRepository,
    private uploader: Uploader
  ) {}

  async execute({
    body,
    fileName,
    fileType,
  }: UploadAndCreateAttachmentUseCaseRequest): Promise<UploadAndCreateAttachmentUseCaseResponse> {
    if (!/^(image\/(jpeg|png))$|^application\/pdf$/.test(fileType)) {
      return left(new InvalidAttachmentTypeError(fileType));
    }

    const { url } = await this.uploader.upload({ body, fileName, fileType });

    const attachment = Attachment.create({ title: fileName, url });

    await this.attachmentsRepository.create(attachment);

    return right({ attachment });
  }
}
