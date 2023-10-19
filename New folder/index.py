def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def evaluate(board):
    for row in board:
        if row.count('X') == 3:
            return 10
        if row.count('O') == 3:
            return -10

    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col]:
           
