// components/ProductModal.tsx
"use client";

import useModalStore from '@/app/stores/useModalStore';
import React from 'react';
import "./modal.css"
import Image from "next/image"
import { useEffect } from 'react';
import { X } from 'lucide-react';
import "./product-modal.css"


const ProductModal = () => {
    const { isOpen, modalType, product, closeModal } = useModalStore();

    // close Modal when user press ESC button
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal()
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)

    }, [isOpen, closeModal])

    //prevent background scroll:
    useEffect(()=>{
        document.body.style.overflow = isOpen ? "hidden" : ""

        return () => {
            document.body.style.overflow = ""
        }

    },[isOpen])

    
    if (!isOpen || modalType !== "PRODUCT_MODAL" || !product) return null;

    return (
      <div className="modal-root">
        {/** Backdrop */}
        <div
          className="modal-backdrop"
          aria-hidden="true"
          onClick={closeModal}        
        />

        {/**Semantic Dialog */}
        <dialog
          open
          className="modal-container"
          role="dialog"
          aria-modal="true"
          aria-labelledby='product-modal-title'
        >
          <section className="modal-surface">
          {/**Header */}
          <header className="modal-header">
            <h2 id="product-modal-title" className="modal-title">
              {product.name}
            </h2>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            
            >
              <X size={20} />
            </button>
          </header>

          {/**Image */}
          <figure className="modal-image">
            <Image 
              src={product.image}
              alt={product.name}
              fill
              className="image-cover"
            />
          </figure>
          {/**Main Content */}
          <section className="modal-content">
          <div className="modal-meta">
            <span className="modal-price">
              ${product.price.toFixed(2)}
            </span>

            <span
              className={`modal-stock ${
                product.inStock ? "in-stock" : "out-of-stock"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          </section>
          {/* Footer actions */}
          <footer className="modal-actions">
            <button className="primary-btn">Add to Cart</button>
          </footer>
          </section>

        </dialog>


      </div>
    
    );

}

export default ProductModal;