// lib/api/wishlist.ts
export interface WishlistFormData {
    name: string;
    email: string;
    message: string;
  }
  
  interface WishlistResponse {
    message: string;
  }
  
  interface WishlistError {
    error: string;
  }
  
  export async function submitWishlistForm(formData: WishlistFormData): Promise<WishlistResponse> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://finetunai-server-2.onrender.com';
    const response = await fetch(`${apiUrl}/api/wishlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error((data as WishlistError).error || 'Something went wrong');
    }
  
    return data as WishlistResponse;
  }