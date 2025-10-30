import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

function Comments() {
  const [comments, setComments] = useState([
    {
      name: "Sophia",
      message: "This post inspired me to visit Paris! Beautiful shots ❤️",
      date: "Oct 25, 2025",
    },
    {
      name: "Daniel",
      message: "Amazing travel tips. I really like the way you write!",
      date: "Oct 28, 2025",
    },
  ]);

  const [newComment, setNewComment] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.name || !newComment.message) return;

    const date = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    setComments([...comments, { ...newComment, date }]);
    setNewComment({ name: "", message: "" });
  };

  return (
    <Container className="my-5">
      <h3 className="mb-4 text-center">💬 Leave a Comment</h3>

      {/* Comment Form */}
      <Form onSubmit={handleSubmit} className="mb-5">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={newComment.name}
            onChange={(e) =>
              setNewComment({ ...newComment, name: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write something..."
            value={newComment.message}
            onChange={(e) =>
              setNewComment({ ...newComment, message: e.target.value })
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Post Comment
        </Button>
      </Form>

      {/* Display Comments */}
      <div>
        {comments.map((comment, index) => (
          <Card key={index} className="mb-3 shadow-sm border-0">
            <Card.Body>
              <Card.Title style={{ marginBottom: "5px" }}>
                {comment.name}
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontSize: "0.9rem" }}
              >
                {comment.date}
              </Card.Subtitle>
              <Card.Text>{comment.message}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Comments;
