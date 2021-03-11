import { Module } from '@nestjs/common';
import { SharedLibraryService } from './shared-library.service';

@Module({
  providers: [SharedLibraryService],
  exports: [SharedLibraryService],
})
export class SharedLibraryModule {}
