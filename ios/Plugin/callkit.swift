import Foundation

@objc public class callkit: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
