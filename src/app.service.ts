import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private readonly storage: Storage;
  constructor() {
    const GCP_PROJECT_ID = 'my-projects-youtube';
    const GCP_KEY_FILE_PATH = 'key-neiser-gcp.json';

    this.storage = new Storage({
      projectId: GCP_PROJECT_ID,
      keyFilename: GCP_KEY_FILE_PATH
    });
  }

  async uploadFileGcp() {
    const GCP_BUCKET = 'bucket-files-api';
    const bucket = this.storage.bucket(GCP_BUCKET);
    const result = await bucket.upload("D:\\temp\\nest.jpg");
    return result;
  }
}
