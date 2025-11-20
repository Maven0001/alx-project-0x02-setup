function PostModal() {
  return (
    <div>
      <form action="submit">
        <label htmlFor="">Title</label>
        <input type="text" placeholder="title" />
        <br />
        <label htmlFor="">Content</label>
        <input type="text" placeholder="content" />
        <br />
        <button>Open modal</button>
      </form>
    </div>
  );
}

export default PostModal;
