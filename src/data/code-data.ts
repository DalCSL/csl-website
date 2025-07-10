export const beforeCode = `def two_sum(nums, target):
"""
Brute force approach - O(n²) time complexity
Check every pair of numbers to find the target sum
"""
for i in range(len(nums)):
    for j in range(i + 1, len(nums)): # [!code highlight]
        if nums[i] + nums[j] == target: # [!code highlight]
            return [i, j] # [!code highlight]

return []  # No solution found

# Example usage
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(f"Indices: {result}")  # Output: [0, 1]

# Time Complexity: O(n²) # [!code highlight]
# Space Complexity: O(1) # [!code highlight]`;

export const afterCode = `def two_sum(nums, target):
"""
Optimized hash map approach - O(n) time complexity # [!code ++]
Use hash map to store seen numbers and their indices # [!code ++]
"""
seen = {}  # Hash map to store number -> index # [!code focus]

for i, num in enumerate(nums): # [!code focus]
    complement = target - num # [!code focus]
    
    if complement in seen: # [!code focus]
        return [seen[complement], i] # [!code focus]
    
    seen[num] = i # [!code focus]

return []  # No solution found

# Example usage
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(f"Indices: {result}")  # Output: [0, 1]

# Time Complexity: O(n) # [!code ++]
# Space Complexity: O(n) # [!code ++]`;
