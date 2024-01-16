import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Document } from 'src/app/Document';
import { DocumentDetailService } from 'src/app/service/document-detail.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit{
  document: Document | undefined;
  comment = '';



  constructor(
    private route: ActivatedRoute,
    private documentDetailService: DocumentDetailService
  ) {}

  ngOnInit(): void {
    this.getDocumentDetails();
  }

  getDocumentDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.documentDetailService.getDocumentById(id)
      .subscribe(document => this.document = document);
  }

  deleteDocument(): void {
    if (this.document) {
      this.documentDetailService.deleteDocument(this.document.id)
        .subscribe(() => {
          // Navigate back to the document list or perform other actions
        });
    }
  }

  downloadDocument(): void {
    const fileName = this.document?.name?.toString() ?? 'downloadedFile';

    if (this.document) {
      this.documentDetailService.downloadDocument(this.document.id)
        .subscribe(blob => {
          const blobUrl = window.URL.createObjectURL(blob);
          const link = document.createElement('a');

          link.download = fileName;

          link.href = blobUrl;
          link.click();
        });
    }
  }



  approveDocument(): void {
    if (this.document) {
      this.documentDetailService.approveDocument(this.document.id)
        .subscribe(updatedDocument => this.document = updatedDocument);
    }
  }

  disapproveDocument(): void {
    if (this.document) {
      this.documentDetailService.disapproveDocument(this.document.id)
        .subscribe(updatedDocument => this.document = updatedDocument);
    }
  }

  clearComments(): void {
    if (this.document) {
      this.documentDetailService.clearComments(this.document.id)
        .subscribe(updatedDocument => {
          this.document = updatedDocument;
        });
    }
  }

  addComment(): void {
    if (this.document && this.comment) {
      this.documentDetailService.addComment(this.document.id, this.comment)
        .subscribe(updatedComment => {
          // Actualiza solo el array de comentarios en lugar de todo el documento
          if (this.document) {
            this.document.comments.push(updatedComment);
            this.comment = ''; // Limpia el campo de comentario
          }
        });
    }
  } 
  
}
