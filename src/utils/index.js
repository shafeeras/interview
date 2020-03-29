import { useState, useEffect } from "react";

export const retry = (fn, counter = 2) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(error => {
        setTimeout(() => {
          if (counter === 1) {
            reject(error);
            return;
          }
          retry(fn, counter - 1).then(resolve, reject);
        }, 1500);
      });
  });
};
export const debounce = (func, delay) => {
  let timeout;
  const context = this;
  clearTimeout(timeout);
  timeout = setTimeout(() => func.apply(context), delay);
};

export const useVisibility = (node, threshold = 0.01, rootMargin = "0px") => {
  const [visibile, setVisible] = useState(false);
  useEffect(() => {
    let observer;
    if (node) {
      if (window.IntersectionObserver) {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.intersectionRatio > 0 || entry.isIntersecting) {
              setVisible(true);
              observer.unobserve(node);
            }
          },
          {
            threshold,
            rootMargin
          }
        );
        observer.observe(node);
      } else {
        setVisible(true);
      }
    }
    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(node);
      }
    };
  }, [node]);

  return visibile;
};
