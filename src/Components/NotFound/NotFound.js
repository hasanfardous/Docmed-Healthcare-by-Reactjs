import imgNotFound from '../../assets/not-found.jpg';

function NotFound() {
  return (
    <div className="NotFound mb-5">
      <img src={imgNotFound} className="img-fluid" alt="not found" />
      <p className="text-center pb-5">Sorry! We could not find the page, that you are looking for.</p>
    </div>
    );
  }
  
export default NotFound;