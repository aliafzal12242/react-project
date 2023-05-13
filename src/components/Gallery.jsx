import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    'https://picsum.photos/id/1018/800/600',
    'https://picsum.photos/id/1015/800/600',
    'https://picsum.photos/id/1019/800/600',
    'https://picsum.photos/id/1021/800/600',
    'https://picsum.photos/id/1022/800/600',
    'https://picsum.photos/id/1024/800/600',
    'https://picsum.photos/id/1025/800/600',
    'https://picsum.photos/id/1027/800/600',
    'https://picsum.photos/id/1029/800/600',
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Gallery</h2>
      <Row>
        {images.map((image, index) => (
          <Col key={index} md={4} className="mb-4">
            <img src={image} alt={`Image ${index}`} className="img-fluid" onClick={() => handleImageClick(image)} />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage} alt="Selected Image" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Gallery;
