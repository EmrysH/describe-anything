import tkinter as tk
from tkinter import filedialog
from PIL import Image, ImageTk

def get_click_coordinates(event):
    """Callback function to handle mouse click events."""
    x, y = event.x, event.y
    print(f"Mouse clicked at: ({x}, {y})")

def load_image():
    """Function to load an image using a file dialog."""
    file_path = filedialog.askopenfilename(
        title="Select an Image",
        filetypes=[("Image Files", "*.png *.jpg *.jpeg *.bmp *.gif")]
    )
    if file_path:
        # Open the image with PIL
        image = Image.open(file_path)
        # Resize the image for display (optional)
        # Convert image to a format Tkinter can use
        img_tk = ImageTk.PhotoImage(image)
        # Display the image in the canvas
        canvas.config(width=img_tk.width(), height=img_tk.height())
        canvas.image = img_tk  # Store reference to avoid garbage collection
        canvas.create_image(0, 0, anchor="nw", image=img_tk)

# Create the main application window
root = tk.Tk()
root.title("Image Click Coordinate Finder")

# Create a Canvas to display the image
canvas = tk.Canvas(root)
canvas.pack()

# Bind the left mouse click event to the canvas
canvas.bind("<Button-1>", get_click_coordinates)

# Add a button to load an image
load_button = tk.Button(root, text="Load Image", command=load_image)
load_button.pack()

# Start the Tkinter main loop
root.mainloop()