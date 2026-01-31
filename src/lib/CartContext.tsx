'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Game } from '@/lib/constants'

interface CartItem extends Game {
    quantity: number
}

interface CartContextType {
    cart: CartItem[]
    addToCart: (game: Game) => void
    removeFromCart: (gameId: string) => void
    updateQuantity: (gameId: string, quantity: number) => void
    clearCart: () => void
    totalItems: number
    totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([])

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('azimut-cart')
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart))
            } catch (e) {
                console.error('Failed to parse cart', e)
            }
        }
    }, [])

    // Save cart to localStorage on change
    useEffect(() => {
        localStorage.setItem('azimut-cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (game: Game) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === game.id)
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...prevCart, { ...game, quantity: 1 }]
        })
    }

    const removeFromCart = (gameId: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== gameId))
    }

    const updateQuantity = (gameId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(gameId)
            return
        }
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === gameId ? { ...item, quantity } : item
            )
        )
    }

    const clearCart = () => setCart([])

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    const totalPrice = cart.reduce((sum, item) => {
        const priceValue = parseFloat(item.price.replace('€', '').replace(',', '.'))
        return sum + priceValue * item.quantity
    }, 0)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
