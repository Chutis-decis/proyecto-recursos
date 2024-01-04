package com.humans.resource.controller.DatosEscolaresController;

import com.humans.resource.entity.docMensuales.Document;
import com.humans.resource.repository.docMensuales.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class DocumentController {
    private final DocumentRepository documentRepository;

    @GetMapping
    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Document> getDocumentById(@PathVariable Long id) {
        return documentRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Document> uploadDocument(@RequestParam("file") MultipartFile file,
                                                   @RequestParam("name") String name,
                                                   @RequestParam("status") String status,
                                                   @RequestParam("documentType") String documentType) throws IOException {
        Document document = new Document();
        document.setName(name);
        document.setStatus(status);
        document.setDocumentType(documentType);
        document.setUploadDate(new java.util.Date());
        document.setFile(file.getBytes());
        document.setValidated(false);

        Document savedDocument = documentRepository.save(document);
        return ResponseEntity.ok(savedDocument);
    }

    @PostMapping("/comment/{id}")
    public ResponseEntity<Document> addComment(@PathVariable Long id, @RequestBody String comment) {
        return documentRepository.findById(id)
                .map(document -> {
                    document.getComments().add(comment);
                    return ResponseEntity.ok(documentRepository.save(document));
                })
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping("/approve/{id}")
    public ResponseEntity<Document> approveDocument(@PathVariable Long id) {
        return documentRepository.findById(id)
                .map(document -> {
                    document.setValidated(true);
                    return ResponseEntity.ok(documentRepository.save(document));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/disapprove/{id}")
    public ResponseEntity<Document> disapproveDocument(@PathVariable Long id) {
        return documentRepository.findById(id)
                .map(document -> {
                    document.setValidated(false);
                    return ResponseEntity.ok(documentRepository.save(document));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadDocument(@PathVariable Long id) {
        return documentRepository.findById(id)
                .map(document -> ResponseEntity.ok()
                        .header("Content-Disposition", "attachment; filename=" + document.getName())
                        .body(document.getFile()))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDocument(@PathVariable Long id) {
        documentRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
