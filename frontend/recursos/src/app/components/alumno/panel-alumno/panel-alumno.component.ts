import { Component } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';
import { Document } from 'src/app/Document';

@Component({
  selector: 'app-panel-alumno',
  templateUrl: './panel-alumno.component.html',
  styleUrls: ['./panel-alumno.component.css'],
})
export class PanelAlumnoComponent{
  documents: Document[] = [];
  selectedFile: File | null = null;
  newName = '';
  newStatus = '';
  newDocumentType = '';

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.documentService.getAllDocuments().subscribe((documents: Document[]) => {
      this.documents = documents;
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  addDocument(): void {
    if (this.selectedFile && this.newName && this.newStatus && this.newDocumentType) {
      this.documentService.addDocument(this.selectedFile, this.newName, this.newStatus, this.newDocumentType)
        .subscribe(() => {
          this.loadDocuments();
          this.clearForm();
        });
    }
  }

  deleteDocument(id: number): void {
    this.documentService.deleteDocument(id)
      .subscribe(() => {
        this.loadDocuments();
      });
  }

  updateDocument(id: number): void {
    if (this.selectedFile && this.newName && this.newStatus && this.newDocumentType) {
      this.documentService.updateDocument(id, this.selectedFile, this.newName, this.newStatus, this.newDocumentType)
        .subscribe(() => {
          this.loadDocuments();
          this.clearForm();
        });
    }
  }

  clearForm(): void {
    this.selectedFile = null;
    this.newName = '';
    this.newStatus = '';
    this.newDocumentType = '';
  }
}
